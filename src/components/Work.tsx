import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "Customer Segmentation",
    category: "Machine Learning",
    tools: "Python, KMeans Clustering, Scikit-Learn, EDA",
    image: "/images/customer_segmentation.png",
  },
  {
    title: "Student Performance Analysis",
    category: "ML & Data Analysis",
    tools: "Python, Pandas, Seaborn, Matplotlib, EDA",
    image: "/images/student_performance.png",
  },
  {
    title: "House Price Prediction",
    category: "Machine Learning",
    tools: "Python, Scikit-Learn, Linear Regression",
    image: "/images/house_price.png",
  },
  {
    title: "Spam Mail Detection",
    category: "NLP / Machine Learning",
    tools: "Python, NLP, NLTK, Naive Bayes, TF-IDF",
    image: "/images/spam_detection.png",
  },
  {
    title: "Kubernetes Cloud Deployment",
    category: "DevOps & Cloud",
    tools: "AWS, Kubernetes, Helm, Docker, Terraform, CI/CD",
    image: "/images/kubernetes_deployment.png",
  },
  {
    title: "DevOps CI/CD Pipelines",
    category: "DevOps & Cloud",
    tools: "AWS, Docker, GitHub Actions, Linux, Ansible, Jenkins",
    image: "/images/node.webp",
  },
  {
    title: "Personal Portfolio v2",
    category: "Web Development",
    tools: "HTML, CSS, JavaScript, GSAP, Git/GitHub",
    image: "/images/react.webp",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box || box.length === 0) return 0;
      
      const workContainer = document.querySelector(".work-container");
      if (!workContainer) return 0;

      const rectLeft = workContainer.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentElement = box[0].parentElement;
      if (!parentElement) return 0;

      const parentWidth = parentElement.getBoundingClientRect().width;
      const style = window.getComputedStyle(box[0]);
      let padding: number = parseInt(style.padding || "0") / 2;
      
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
      return translateX;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${setTranslateX()}`,
        scrub: true,
        pin: true,
        pinType: "transform",
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: () => -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
