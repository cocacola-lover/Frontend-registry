import React, { FC, useRef } from "react";
import { IFormData } from "../types";
import Container from "../../shared/components/Container";
import AdminSupervisors from "../components/AdminSupervisors";
import Spacer from "../../shared/components/Spacer";
import { LinksToPresentations } from "../components/LinksToPresentations";
import Results from "../components/Results";
import Role from "../components/Role";
import InputTextArea from "../components/InputTextArea";
import ProjectCalendar from "../components/ProjectCalendar";
import { TestAdminAddTag } from "../components/AdminAddTag";
import {
  IAPIClient,
  IAPICurator,
  IAPIProject,
  IAPIStudent,
  IAPISupervisor,
  IAPITag,
} from "../../../types";
import AdminRoles from "../components/AdminRoles";
import AdminSubmit from "../components/AdminSubmit";
import AdminEditTitle from "../components/AdminEditTitle";
import NavButtons from "../components/NavButtons";

interface AdminEditProjectProps {
  project: IAPIProject;
  tags: IAPITag[];
  supervisorData: [IAPIClient[], IAPICurator[], IAPISupervisor[]];
  students: IAPIStudent[];
}

const AdminEditProject: FC<AdminEditProjectProps> = ({
  project,
  tags,
  supervisorData,
  students,
}) => {
  const projectRef = useRef<IAPIProject>(project);
  const formDataRef = useRef<IFormData>({
    supervisors: [
      {
        title: "Заказчик",
        names: ["Иванов Иван Иванович"],
      },
      {
        title: "Куратор",
        names: ["Смирнов Александр Дмитриевич"],
      },
      {
        title: "Руководитель",
        names: ["Васильев Артём Андреевич"],
      },
    ],
    teams: new Map([
      [
        "Команда 1",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
      ],
      [
        "Команда 2",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/900px-JavaScript-logo.png",
      ],
    ]),
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique et asperiores earum corporis impedit beatae dolorem, adipisci officia animi facere necessitatibus doloribus tempora velit quis ea, eius illum itaque quam molestiae, quos eaque. Minus temporibus laborum sed eligendi. Quia ipsa recusandae explicabo, hic iure repellendus, iste voluptatum labore perspiciatis veniam vitae, nulla laborum repudiandae nisi illo nihil aut incidunt vel voluptatem nostrum suscipit eum. Eveniet, ipsa veniam dignissimos ratione enim animi doloremque id tenetur quam libero repellendus cum veritatis totam molestiae non magni pariatur aliquam ex doloribus natus qui asperiores aliquid consequuntur? Quaerat sapiente, accusamus at enim quia quam eius, dolorum adipisci voluptas fuga quo cumque sunt vero! Perferendis nemo placeat sequi laboriosam non quae eveniet, beatae eligendi praesentium? Fugit, veritatis? Optio maxime ea ab, sequi, accusamus quidem recusandae porro vel dolorem eligendi illum expedita explicabo aut sapiente. Amet eligendi eaque distinctio vel quos, sed consequuntur. Eveniet consequuntur, deserunt quas debitis consectetur deleniti esse ab error. Illum corrupti voluptatem vel fugiat porro error, nulla, debitis vitae ad reprehenderit voluptas! Perferendis inventore architecto, explicabo suscipit quidem earum nobis sapiente. Quo reprehenderit sint aspernatur ex ipsa rem officiis doloribus iusto rerum quod eaque qui cum, autem laborum maxime alias aliquam at in.",

    projectDescription: "a",
    commandRequirements: "aa",
    projectRequirements: "aaa",

    projectTimeline: {
      dateAdd: "2000-01-01",
      applicationDeadline: {
        from: "2000-01-01",
        to: "",
      },
      projectImplementationDates: {
        from: "2000-01-01",
        to: "",
      },
      projectProtection: {
        from: "2000-01-01",
        to: "",
      },
      projectStatus: "Защита",
    },
  });

  const removeLink = (key: string) => {};

  return (
    <>
      {/* рендерим только если есть значение у formDataRef.current.
        Вообще есть ощущение, что он и так изначально будет, но я решил,
        что лишним не будет на всякий случай эту проверку добавить */}
      {formDataRef.current && (
        <Container>
          {/* <AdminAddTag
            setInput={(text: string) => {}}
            suggestedTagsList={["Test1", "Test2"]}
            setTag={(tag: string) => {}}
            onClose={() => {}}
          /> */}
          <NavButtons projectId={projectRef.current.projectId} />
          <Spacer axis="vertical" size={60} />
          <AdminEditTitle projectRef={projectRef} />
          <Spacer axis="vertical" size={60} />
          <TestAdminAddTag projectRef={projectRef} tags={tags} />
          <Spacer axis="vertical" size={60} />
          <AdminSupervisors
            formDataRef={formDataRef}
            projectRef={projectRef}
            supervisorData={supervisorData}
          />
          <Spacer axis="vertical" size={60} />
          <LinksToPresentations
            linksAndLabels={formDataRef.current.teams}
            removeLink={removeLink}
          />
          <Spacer axis="vertical" size={60} />
          <AdminRoles projectRef={projectRef} students={students} />
          <Spacer axis="vertical" size={60} />
          <InputTextArea
            projectRef={projectRef}
            title="Описание проекта:"
            text="description"
          />
          <InputTextArea
            projectRef={projectRef}
            title="Требование к исполнителю:"
            text="requirementsForPerformers"
          />
          <InputTextArea
            projectRef={projectRef}
            title="Требования проекта:"
            text="requirements"
          />
          <ProjectCalendar projectRef={projectRef} />
          <Spacer axis="vertical" size={40} />
          <Results
            initialResults={project.links || []}
            projectRef={projectRef}
          />
        </Container>
      )}

      {/* {formDataRef.current && (
        <Role formDataRef={formDataRef}/>
      )} */}

      <Spacer axis="vertical" size={40} />
      <AdminSubmit projectRef={projectRef} />
    </>
  );
};

export default AdminEditProject;
