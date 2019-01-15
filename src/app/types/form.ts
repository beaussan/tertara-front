
export interface Form {
  id: number;
  over: boolean;
  started: boolean;
  questions: Question[];
}

export interface Question {
  id: number;
  title: string;
  position: number;
  terminated: boolean;
  ignoreResponse: boolean;
  answerPossibilities: AnswerPossibility[];
}

export interface AnswerPossibility {
  id: number;
  value: string;
}
