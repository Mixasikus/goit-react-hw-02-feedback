import { Button } from './FeedBack.module';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <Button
          key={option}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}
