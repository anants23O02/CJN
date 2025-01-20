import React from "react";
import { Button } from "antd";
import styles from "./Button.module.css";

const PrimaryButton: React.FC = () => {
  return (
    <div className={styles.alignRight}>
    <Button className={styles.mergeButton} type="default">
      Merge Names
    </Button>
    </div>
  );
};

export default PrimaryButton;
