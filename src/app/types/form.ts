
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

export interface ApiAnswer {
  id: number;
  answerValue: AnswerPossibility;
}

export interface CalculatedAnswer {
  count: number;
  value: string;
}
/*
{
    "id": 1451,
    "answerValue": {
      "id": 2841,
      "value": "NON"
    }
  },
  {
 */
