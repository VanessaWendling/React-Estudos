import React, { useState } from "react";
import Github from "../assets/github.png";
import Button from "../components/Button";
import { Input } from "../components/Input";
import { ItemRepo, RepoProps } from "../components/ItemRepo";
import { getRepo } from "../services/api";
import { Container } from "./styles";

function App() {
  const [repos, setRepos] = useState<RepoProps[]>([]);
  const [currentRepo, setCurrentRepo] = useState("");

  const handleSearchRepo = async () => {
    const { data } = await getRepo(currentRepo);
    if (data.id) {
      const isExist = repos.find((repo: RepoProps) => repo.id === data.id);
      if (!isExist) repos.push(data);
    }
    setCurrentRepo("");
  };

  return (
    <Container>
      <img src={Github} style={{ height: 150, width: 150 }} />
      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo: RepoProps) => (
        <ItemRepo
          id={repo.id}
          name={repo.name}
          full_name={repo.full_name}
          html_url={repo.html_url}
        />
      ))}
    </Container>
  );
}

export default App;
