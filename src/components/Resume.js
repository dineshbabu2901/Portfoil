import ResumeImg from "../assects/resume.jpg";

export default function Resume() {
  const config = {
    link: "https://cloud.appwrite.io/v1/storage/https://cloud.appwrite.io/v1/storage/buckets/66335c92001f09afd206/files/66335cd3001097edd721/view?project=65effcd4e74568158697&mode=admin/65b9d74f62dd926e14ee/files/65f95ddf04335d61a0a3/view?project=65b9d70a67453f81421a&mode=admin", 
  };

  return (
    <section id="resume" className="flex flex-col md:flex-row bg-secondary px-5">
      <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
        <img className="w-[300px]" src={ResumeImg} alt="Resume" />
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-5">
            You can view my resume{" "}
            <a className="btn" href={config.link} download>
              {" "}
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}