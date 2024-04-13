import model from "./model.js";

export const createModuleForCourse = async (module) => {
  delete module._id;
  console.log("KOMAL-createModule dao", module);

  const a = await model.create(module);
  console.log("KOMAL-createModule dao after", {
    ...a._doc,
    _id: JSON.stringify(a._id),
  });
  return a;
};

export const findAllModulesForCourse = (courseId) => model.findById(courseId);

export const findAllModulesByCourseId = (courseId) =>
  model.find({ courseId: courseId });

export const updateModule = (moduleId, module) =>
  model.updateOne({ _id: moduleId }, { $set: module });

export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });
