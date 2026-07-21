import styles from "./EmptyState.module.css";

interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = ({
  title,
  description,
}: EmptyStateProps) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>

      <p>{description}</p>
    </div>
  );
};

export default EmptyState;