import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  const createCourse = async (req, res) => {
    try {
      const course = await dao.createCourse(req.body);
      res.json(course);
    } catch (err) {
      res.status(400).json({ message: "Error in createCourse" });
    }
  };

  const findAllCourses = async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.json(courses);
    } catch (err) {
      console.log("Error in findAllCourses", err);
      res.status(400).json({ message: "Error in findAllCourses" });
    }
  };

  const findCourseById = async (req, res) => {
    try {
      const { id } = req.params;
      const course = await dao.findCourseById(id);
      if (!course) {
        return res.status(404).json({ message: "Course not found" });
      }
      {
        res.json(course);
      }
    } catch (err) {
      res.status(400).json({ message: "Error in findCourseById" });
    }
  };

  const updateCourse = async (req, res) => {
    let { id } = req.params;
    const status = await dao.updateCourse(id, req.body);
    res.json(status);
  };

  const deleteCourse = async (req, res) => {
    let id = req.params.id;
    try {
      const status = await dao.deleteCourse(id);
      res.json(status);
    } catch (e) {
      console.error("ERROR IN DELETE COURSE", e);
      res.status(500).json({ message: "Error in deleteCourse" });
    }
  };

  app.post("/api/courses", createCourse);
  app.get("/api/courses", findAllCourses);
  app.get("/api/courses/:id", findCourseById);
  app.put("/api/courses/:id", updateCourse);
  app.delete("/api/courses/:id", deleteCourse);
}
