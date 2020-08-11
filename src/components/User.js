import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Segment, Grid, Image } from 'semantic-ui-react';
import Question from './Question';
import QuestionResult from './QuestionResult';
import QuestionPreview from './QuestionPreview';
import { colors } from '../utils/helpers';

const questionTypes = {
  QUESTION_PREVIEW: 'QUESTION_PREVIEW',
  QUESTION: 'QUESTION',
  QUESTION_RESULT: 'QUESTION_RESULT'
};

const QuestionContent = props => {
  const { questionType, question, unanswered } = props;

  switch (questionType) {
    case questionTypes.QUESTION_PREVIEW:
      return <QuestionPreview question={question} unanswered={unanswered} />;
    case questionTypes.QUESTION:
      return <Question question={question} />;
    case questionTypes.QUESTION_RESULT:
      return <QuestionResult question={question} />;
    default:
      return;
  }
};

export class User extends Component {
  static propTypes = {
    question: PropTypes.object,
    author: PropTypes.object,
    questionType: PropTypes.string,
    unanswered: PropTypes.bool,
    question_id: PropTypes.string
  };
  render() {
    const {
      author,
      question,
      questionType,
      badPath,
      unanswered = null
    } = this.props;

    if (badPath === true) {
      return <Redirect to="/questions/error" />;
    }

    const tabColor = unanswered === true ? colors.green : colors.blue;
    const borderTop =
      unanswered === null
        ? `1px solid ${colors.grey}`
        : `2px solid ${tabColor.hex}`;

    return (
      <Segment.Group>
        <Grid divided padded style={{ borderTop: borderTop }}>
          <Grid.Row>
            <Grid.Column width={4}>
              <b>{author.name} asks</b>
              <div>
                <Image src={author.avatarURL} />
              </div>
            </Grid.Column>
            <Grid.Column width={11}>
              <QuestionContent
                questionType={questionType}
                question={question}
                unanswered={unanswered}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment.Group>
    );
  }
}

function mapStateToProps(
  { users, questions, authedUser },
  { match, question_id }
) {
  let question,
    author,
    questionType,
    badPath = false;
  if (question_id !== undefined) {
    question = questions[question_id];
    author = users[question.author];
    questionType = questionTypes.QUESTION_PREVIEW;
  } else {
    const { question_id } = match.params;
    question = questions[question_id];
    const user = users[authedUser];

    if (question === undefined) {
      badPath = true;
    } else {
      author = users[question.author];
      questionType = questionTypes.QUESTION;
      if (Object.keys(user.answers).includes(question.id)) {
        questionType = questionTypes.QUESTION_RESULT;
      }
    }
  }

  return {
    badPath,
    question,
    author,
    questionType
  };
}

export default connect(mapStateToProps)(User);
