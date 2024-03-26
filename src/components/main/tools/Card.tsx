interface Props {
  title: string;
  name: string;
  url: string;
}

const Card = ({ title, name, url }: Props) => {
  return (
    <figure title={title}>
      <img src={url} alt={name} loading="lazy" />
      <figcaption> {name}</figcaption>
    </figure>
  );
};

export default Card;
