import styles from "./SummaryCard.module.css";

interface SummaryCardProps {
  title: string;
  value: string | number;
}

const SummaryCard = ({
  title,
  value,
}: SummaryCardProps) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>

      <p>{value}</p>
    </div>
  );
};

export default SummaryCard;