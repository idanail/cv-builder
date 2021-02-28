import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import {
  db,
  iconsObj,
  iconsStyle,
  staticDb,
  tips,
} from "../assets/js/database.js";
import html2pdf from "html2pdf.js";

export const Context = createContext({});

export const Provider = (props) => {
  const [staticData] = useState(staticDb);
  const [data, setData] = useState(db);
  const [icons] = useState(iconsObj);
  const [iconStyle] = useState(iconsStyle);
  const [editMode, setEditMode] = useState(false);
  const [displayTips, setDisplayTips] = useState("");
  const [route, setRoute] = useState("");
  const [rating] = useState(1);
  const [isFocused, setFocused] = useState(false);
  const [isLinkedInChecked, setLinkedInChecked] = useState(false);
  const [isWeAreLaikaChecked, setWeAreLaikaChecked] = useState(false);
  const [isWorkEntered, setWorkEntered] = useState(false);
  const [isEducationEntered, setEducationEntered] = useState(false);
  const [isAchievementEntered, setAchievementEntered] = useState(false);
  const [isLanguageEntered, setLanguageEntered] = useState(false);
  const [modal, setModal] = useState(false);

  // Basic Info

  const addName = (name) => {
    setData({ ...data, basicInfo: { ...data.basicInfo, name } });
  };

  const addTitles = (titles) => {
    setData({ ...data, basicInfo: { ...data.basicInfo, titles } });
  };

  const addGoals = (goals) => {
    setData({ ...data, basicInfo: { ...data.basicInfo, goals } });
  };

  // Image

  const fileUploadInputChange = (e) => {
    e.target.value &&
      setData({ ...data, image: URL.createObjectURL(e.target.files[0]) });
  };

  // Contact info

  const editContactInfo = (e) => {
    const newContactInfo = { ...data.contactInfo };
    newContactInfo[e.target.name.split(" ")[0]] = e.target.value;

    setData({ ...data, contactInfo: newContactInfo });
  };

  const removeContactInfo = () => {
    console.log("removed linkedin/twitter");
  };

  // Work Experience

  const addWorkExperience = () => {
    const newWorkExperience = {
      id: uuid(),
      position: "",
      company: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      present: false,
      location: "",
      aboutJob: "",
      jobDescription: [
        {
          id: uuid(),
          accomplishment: "",
        },
        {
          id: uuid(),
          accomplishment: "",
        },
        {
          id: uuid(),
          accomplishment: "",
        },
      ],
    };

    setData({
      ...data,
      workExperience: [...data.workExperience, newWorkExperience],
    });
  };

  const removeWorkExperience = (id) =>
    setData({
      ...data,
      workExperience: data.workExperience.filter((el) => el.id !== id),
    });

  const addTask = (parentId) => {
    const newTask = {
      id: uuid(),
      accomplishment: "",
    };

    const indexOfParent = data.workExperience.findIndex(
      (el) => el.id === parentId
    );
    let updated = [...data.workExperience];
    updated[indexOfParent].jobDescription.push(newTask);

    setData({ ...data, workExperience: updated });
  };

  const editTask = (e, i, id, parentId) => {
    const workExperienceEditing = data.workExperience.findIndex(
      (el) => el.id === parentId
    );
    const updated = [...data.workExperience];

    updated[workExperienceEditing].jobDescription[i].accomplishment =
      e.target.value;

    setData({
      ...data,
      workExperience: updated,
    });
  };

  const removeTask = (index, parentId) => {
    const workExperienceEditing = data.workExperience.findIndex(
      (el) => el.id === parentId
    );

    const updated = [...data.workExperience];
    updated[workExperienceEditing].jobDescription.splice(index, 1);
    setData({ ...data, workExperience: updated });
  };

  const editWorkExperience = (e, id, name) => {
    const index = data.workExperience.findIndex((el) => el.id === id);
    const newWorkExp = [...data.workExperience];
    if (name === "present") {
      newWorkExp[index][name] = e.target.checked;
    } else {
      newWorkExp[index][name.split(" ")[0]] = e.target.value;
    }

    setData({ ...data, workExperience: newWorkExp });
  };

  // Education

  const addEducation = () => {
    const newEducation = {
      id: uuid(),
      degree: "",
      university: "",
      startMonth: "",
      startYear: "",
      endMonth: "",
      endYear: "",
      present: false,
      location: "",
      courses: "",
      educationDescription: [
        {
          id: uuid(),
          thingLearned: "",
        },
        {
          id: uuid(),
          thingLearned: "",
        },
        {
          id: uuid(),
          thingLearned: "",
        },
      ],
    };

    setData({
      ...data,
      education: [...data.education, newEducation],
    });
  };

  const removeEducation = (id) =>
    setData({
      ...data,
      education: data.education.filter((el) => el.id !== id),
    });

  const editEducation = (e, id, name) => {
    const index = data.education.findIndex((el) => el.id === id);
    const newEducation = [...data.education];

    name === "present"
      ? (newEducation[index][name] = e.target.checked)
      : (newEducation[index][name.split(" ")[0]] = e.target.value);

    setData({ ...data, education: newEducation });
  };

  const addCourse = (parentId) => {
    const newCourse = {
      id: uuid(),
      thingLearned: "",
    };

    const indexOfParent = data.education.findIndex((el) => el.id === parentId);
    console.log(indexOfParent);

    let updated = [...data.education];
    updated[indexOfParent].educationDescription.push(newCourse);

    setData({ ...data, education: updated });
  };

  const editCourse = (e, i, id, parentId) => {
    const educationEditing = data.education.findIndex(
      (el) => el.id === parentId
    );
    const updated = [...data.education];

    updated[educationEditing].educationDescription[i].thingLearned =
      e.target.value;

    setData({
      ...data,
      education: updated,
    });
  };

  const removeCourse = (index, parentId) => {
    const educationEditing = data.education.findIndex(
      (el) => el.id === parentId
    );

    const updated = [...data.education];
    updated[educationEditing].educationDescription.splice(index, 1);
    setData({ ...data, education: updated });
  };

  // Informal Education

  const addInformalEducation = () => {
    const newEducation = {
      id: uuid(),
      education: "",
    };

    setData({
      ...data,
      informalEducation: [...data.informalEducation, newEducation],
    });
  };

  const removeInformalEducation = (id) =>
    setData({
      ...data,
      informalEducation: data.informalEducation.filter((el) => el.id !== id),
    });

  const editInformalEducation = (e, id, name) => {
    const index = data.informalEducation.findIndex((el) => el.id === id);
    const newInformalEducation = [...data.informalEducation];
    if (name === "present") {
      newInformalEducation[index][name] = e.target.checked;
    } else {
      newInformalEducation[index][name.split(" ")[0]] = e.target.value;
    }
    setData({ ...data, informalEducation: newInformalEducation });
  };

  // Skills & Competencies

  const addSkill = () => {
    const newSkill = {
      id: uuid(),
      skill: `Skill ${data.skills.length + 1}`,
    };

    setData({ ...data, skills: [...data.skills, newSkill] });
  };

  const removeSkill = (id) =>
    setData({ ...data, skills: data.skills.filter((el) => el.id !== id) });

  const editSkill = (query, id) => {
    const index = data.skills.findIndex((el) => el.id === id);
    let newSkills = [...data.skills];
    newSkills[index].skill = query;
    setData({ ...data, skills: newSkills });
  };

  const handleSkillLevel = (nextValue, id) => {
    const updatedValue = [...data.skills];
    const index = updatedValue.findIndex((el) => el.id === id);
    updatedValue[index].level = nextValue;
    setData({ ...data, skills: updatedValue });
  };

  // Achievements & Certificates

  const addAchievement = () => {
    const newAchievement = {
      id: uuid(),
      achievement: "",
      description: "",
    };

    setData({
      ...data,
      achievements: [...data.achievements, newAchievement],
    });
  };

  const removeAchievement = (id) =>
    setData({
      ...data,
      achievements: data.achievements.filter((el) => el.id !== id),
    });

  const editAchievement = (e, id, name) => {
    const index = data.achievements.findIndex((el) => el.id === id);
    const newAchievement = [...data.achievements];
    newAchievement[index][name] = e.target.value;
    setData({ ...data, achievements: newAchievement });
  };

  // Languages

  const addLanguage = () => {
    const newLanguage = {
      id: uuid(),
      language: "",
      level: "",
    };

    setData({
      ...data,
      languages: [...data.languages, newLanguage],
    });
  };

  const removeLanguage = (id) =>
    setData({
      ...data,
      languages: data.languages.filter((el) => el.id !== id),
    });

  const editLanguage = (e, id, name) => {
    const index = data.languages.findIndex((el) => el.id === id);
    const newLanguage = [...data.languages];
    newLanguage[index][name] = e.target.value;
    setData({ ...data, languages: newLanguage });
  };

  const handleFocus = (value) => {
    setFocused(value);
  };

  const languageLevelHandler = (e, id) => {
    let updated = [...data.languages];
    const index = data.languages.findIndex((el) => el.id === id);

    updated[index].level = +e.target.className;

    setData({ ...data, languages: updated });
  };

  // Tips

  const handleTips = (name) => {
    if (name.split(" ")[0] === "linkedin") {
      const category = tips[route].linkedin;
      setDisplayTips(category[name.split(" ")[1]]);
    } else if (name.split(" ")[0] === "wearelaika") {
      const category = tips[route].wearelaika;
      setDisplayTips(category[name.split(" ")[1]]);
    } else {
      const category = tips[route].cv;
      setDisplayTips(category[name.split(" ")[1]]);
    }
  };

  const getRoute = (category) => {
    setRoute(category);
  };

  // Edit Mode

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const setEditModeFalse = () => {
    setEditMode(false);
  };

  // LinkedIn

  const handleLinkedIn = (value) => {
    setLinkedInChecked(value);
  };

  // WeAreLaika

  const handleWeAreLaika = (value) => setWeAreLaikaChecked(value);

  const handleWorkEntered = (value) => setWorkEntered(value);

  const handleEducationEntered = (value) => setEducationEntered(value);

  const handleAchievementEntered = (value) => setAchievementEntered(value);

  const handleLanguageEntered = (value) => setLanguageEntered(value);

  // Download

  const handleDownload = (el) => {
    if (
      isLinkedInChecked &&
      isWeAreLaikaChecked &&
      isWorkEntered &&
      isEducationEntered &&
      isAchievementEntered &&
      isLanguageEntered
    ) {
      window.scrollTo(0, 0);
      let opt = {
        margin: [12, 0, 0, 0],
        filename: `cv_${data.basicInfo.name.replace(/ /g, "_").toLowerCase()}`,
        image: { type: "png", quality: 1 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: "mm", format: "a4" },
      };
      html2pdf().from(el).set(opt).save();
    } else {
      setModal(true);
    }
  };

  const handleClose = () => {
    setModal(false);
  };

  const contextObj = {
    data,
    staticData,
    icons,
    iconStyle,
    route,
    editMode,
    displayTips,
    handleEditMode,
    setEditModeFalse,
    addName,
    addTitles,
    addGoals,
    fileUploadInputChange,
    editContactInfo,
    removeContactInfo,
    addWorkExperience,
    removeWorkExperience,
    addTask,
    editTask,
    removeTask,
    editWorkExperience,
    addEducation,
    removeEducation,
    editEducation,
    addCourse,
    editCourse,
    removeCourse,
    addInformalEducation,
    removeInformalEducation,
    editInformalEducation,
    addSkill,
    removeSkill,
    editSkill,
    handleSkillLevel,
    addAchievement,
    removeAchievement,
    editAchievement,
    addLanguage,
    removeLanguage,
    editLanguage,
    languageLevelHandler,
    isFocused,
    handleFocus,
    getRoute,
    handleTips,
    rating,
    isLinkedInChecked,
    handleLinkedIn,
    isWeAreLaikaChecked,
    handleWeAreLaika,
    isWorkEntered,
    handleWorkEntered,
    isEducationEntered,
    handleEducationEntered,
    isAchievementEntered,
    handleAchievementEntered,
    isLanguageEntered,
    handleLanguageEntered,
    handleDownload,
    modal,
    handleClose,
  };

  return (
    <Context.Provider value={contextObj}>{props.children}</Context.Provider>
  );
};

export const DataContextProvider = Provider;
export const DataContext = Context;
