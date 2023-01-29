import { CircularProgress } from "@mui/material";
import styles from "@/styles/loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loading}>
      <CircularProgress />
    </div>
  );
};

export default Loading;
