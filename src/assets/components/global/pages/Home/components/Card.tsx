type Props = {
  title: string;
  value: string;
};

export default function Card({ title, value }: Props) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}