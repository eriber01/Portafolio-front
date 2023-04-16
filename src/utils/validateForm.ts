import { emailInterface } from "../pages/Contacts/useActions";
import { projects } from "../pages/ProjectsDashboard/useActions";
import { Profile } from "../store/slice/Profile/profileSlice";
import { Tech } from "../store/slice/Tech/techSlice";
import { messageError } from "./messageManage";

export const validateForm = (data: any, key: string) => {
  console.log(data);

  switch (key) {
    case "profile":
      const dataProf: Profile = data;

      console.log("data: ", dataProf);

      if (!dataProf?.name?.trim()) {
        messageError("I need the Name");
        return false;
      } else if (!dataProf?.descriptions?.trim()) {
        messageError("I need the Descriptions");
        return false;
      } else if (!dataProf?.phone?.trim()) {
        messageError("I need the Phone");
        return false;
      } else if (!dataProf?.email?.trim()) {
        messageError("I need the Email");
        return false;
      } else if (!dataProf?.linkedin?.trim()) {
        messageError("I need the Linkedin");
        return false;
      } else if (!dataProf?.position?.trim()) {
        messageError("I need the Position");
        return false;
      } else if (!dataProf?.cvUrl?.trim()) {
        messageError("I need the CV URL");
        return false;
      } else if (!dataProf?.github?.trim()) {
        messageError("I need the GitHub");
        return false;
      } else if (!dataProf?.aboutProgramming?.trim()) {
        messageError("I need the About Programming");
        return false;
      } else if (!dataProf?.aboutGaming?.trim()) {
        messageError("I need the About Gaming");
        return false;
      } else if (!dataProf?.aboutSeries?.trim()) {
        messageError("I need the About Series");
        return false;
      }

      // toast.loading('User Save')

      return true;
    case "tech":
      const dataTech: Tech = data;

      console.log("dataTech: ", dataTech);

      if (!dataTech.name.trim()) {
        messageError("I need the Name");
        return false;
      } else if (!dataTech.descriptions.trim()) {
        messageError("I need the Descriptions");
        return false;
      }

      return true;
    case "project":
      const dataProject: projects = data;

      if (!dataProject?.project?.name?.trim()) {
        messageError("I need the Name");
        return false;
      } else if (!dataProject?.project?.descriptions?.trim()) {
        messageError("I need the Description");
        return false;
      } else if (!dataProject?.project?.gitUrl?.trim()) {
        messageError("I need the Git Url");
        return false;
      } else if (!dataProject?.project?.url?.trim()) {
        messageError("I need the Url Project");
        return false;
      } else if (!dataProject?.project?.projectImg?.name) {
        messageError("I need the Project Image");
        return false;
      } else if (!dataProject?.techs.length) {
        messageError("I need add Techs");
        return false;
      }

      return true;
    case "sendEmail":
      const dataEmail: emailInterface = data;
      if (!dataEmail.name.trim()) {
        messageError("You need Introduce the Name");
        return false;
      } else if (!dataEmail.email.trim()) {
        messageError("You need Introduce the Email");
        return false;
      } else if (!dataEmail.message.trim()) {
        messageError("You need Introduce the Message");
        return false;
      }
      return true;
    default:
      return;
  }
};
