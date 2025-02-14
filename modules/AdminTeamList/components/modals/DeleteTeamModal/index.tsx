import React, { FC, useContext } from "react";
import styles from "../AdminModals.module.sass";
import Image from "next/image";
import closeIcon from "../../../../../public/admin-delete-icon.svg";
import { IDeleteTeamData } from "../../../types";
import { TeamsContext } from "../../../context/teams";

interface DeleteTeamModalProps {
  data: IDeleteTeamData;
  onClose: () => any;
}

const DeleteTeamModal: FC<DeleteTeamModalProps> = ({ data, onClose }) => {
  const { teams, setTeams } = useContext(TeamsContext);

  const handleConfirm = () => {
    if (data.teamId) {
      // fetch
      setTeams(teams.filter((team) => team.id != data.teamId));

      onClose();
    }
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <div className={styles.container}>
      <div className={styles.modal + " " + styles.modalSmaller}>
        <div className={styles.close}>
          <Image
            src={closeIcon}
            alt="Закрыть редактирование"
            onClick={handleClose}
          />
        </div>
        <h2 className={styles.title}>Удаление команды</h2>
        <p className={styles.text}>
          Вы уверены, что хотите удалить команду?
          <br />
          Её невозможно будет восстановить.
        </p>
        <div className={styles.confirm} onClick={handleConfirm}>
          Удалить
        </div>
      </div>
    </div>
  );
};

export default DeleteTeamModal;
