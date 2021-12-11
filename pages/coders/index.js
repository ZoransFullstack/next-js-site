import styles from '../../styles/Coders.module.css';

// This runs at build time when our components are rendered
// It does not run in the browser
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { coders: data },
  };
};

const Coders = ({ coders }) => {
  return (
    <div>
      <h1>All Coders</h1>
      {coders.map((coder) => (
        <div key={coder.id}>
          <a className={styles.single}>
            <h3>{coder.name}</h3>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Coders;
