package learn.chronocode.models;

import java.sql.Date;

public interface UserInterface {
    int getUserId();
    void setUserId(int userId);
    String getEmail();
    void setEmail(String email);
    String getPassword();
    void setPassword(String password);
    String getGithubLogin();
    void setGithubLogin(String githubLogin);
    String getGithubRepoName();
    void setGithubRepoName(String githubRepoName);
    Date getLastPush();
    void setLastPush(Date lastPush);
    String getUserJWTToken();
    void setUserJWTToken();
    int getCurrentStreak();
    void setCurrentStreak(int currentStreak);
    int getXp();
    void setXp(int xp);
    int getCurrentLevel();
    void setCurrentLevel(int currentLevel);
    int getXpToNextLevel();
    void setXpToNextLevel(int xpToNextLevel);
}

