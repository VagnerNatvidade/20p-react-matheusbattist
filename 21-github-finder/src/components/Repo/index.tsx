import { RepoProps } from "../../types/repo";
import { BsCodeSlash } from "react-icons/bs";
import { AiOutlineFork, AiOutlineStar } from "react-icons/ai";
import { RiRepeatOneLine } from "react-icons/ri";
import "./styles.css";

function Repo({
  name,
  language,
  html_url,
  forks_count,
  stargazers_count,
}: RepoProps) {
  return (
    <div className="repo">
      <h3>{name}</h3>
      <p className="language">
        <BsCodeSlash />
        <span>{language}</span>
      </p>
      <div className="stats">
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div id="stats_container">
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className="repo_btn">
        <span>Ver código</span>
        <RiRepeatOneLine />
      </a>
    </div>
  );
}

export default Repo;
