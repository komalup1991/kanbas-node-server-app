import * as dao from "./dao.js";
export default function ModuleRoutes(app) {
  const updateModule = async (req, res) => {
    try {
      const { mid } = req.params;
      const status = await dao.updateModule(mid, req.body);
      res.status(200).json(status);
    } catch (err) {
      res.status(400).json({ message: "Error in updateModule" });
    }
  };

  const deleteModule = async (req, res) => {
    let { mid } = req.params;
    console.log("mid", mid);
    try {
      const status = await dao.deleteModule(mid);
      res.json(status);
    } catch (err) {
      res.status(400).json({ message: "Error in deleteModule" });
    }
  };

  const createModule = async (req, res) => {
    const { cid } = req.params;
    const newModule = {
      ...req.body,
      courseId: cid,
    };
    try {
      const m = await dao.createModuleForCourse(newModule);
      res.status(200).json(m);
    } catch (e) {
      res.status(400).json({ message: "Error in createModule" });
    }
  };

  const findModuleByCourseId = async (req, res) => {
    const { cid } = req.params;
    const modules = await dao.findAllModulesByCourseId(cid);
    res.send(modules);
  };

  app.put("/api/modules/:mid", updateModule);
  app.get("/api/courses/:cid/modules", findModuleByCourseId);
  app.post("/api/courses/:cid/modules", createModule);
  app.delete("/api/modules/:mid", deleteModule);
}
