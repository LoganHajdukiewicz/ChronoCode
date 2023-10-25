package learn.chronocode.models;

import java.sql.Date;
import java.lang.Math;

public class User implements UserInterface {
    private int userId;
    private String email;
    private String password;
    private String githubLogin;
    private String githubRepoName;
    private Date lastPush;
    private String jwt_token;
    private int currentStreak;
    private int currentLevel;
    private int xp;
    private int xpToNextLevel;

    public User(int userId, String email, String password, String githubLogin, String githubRepoName, Date lastPush, String jwt_token, int currentStreak, int currentLevel, int xp, int xpToNextLevel) {
        this.userId = userId;
        this.email = email;
        this.password = password;
        this.githubLogin = githubLogin;
        this.githubRepoName = githubRepoName;
        this.lastPush = lastPush;
        this.jwt_token = jwt_token;
        this.currentStreak = currentStreak;
        this.currentLevel = currentLevel;
        this.xp = xp;
        this.xpToNextLevel = xpToNextLevel;
    }

    public User() {
    }

    public void earnXP(int xpEarned) {
        xp += xpEarned;
        xpToNextLevel -= xpEarned;
        checkLevelUp();
    }

    private void checkLevelUp() {
        if (xpToNextLevel <= 0) {
            int leftoverXp = Math.abs(xpToNextLevel);
            levelUp(leftoverXp);
        }
    }

    private void levelUp(int leftoverXp) {
        this.currentLevel += 1;
        earnXP(leftoverXp);
    }

    private double calculateXpToNextLevel() {
        double xpToLevelUp;
        if (this.currentLevel <= 0) {
            return 0;
        } else {
            xpToLevelUp = 100 * (Math.log(this.currentLevel + 1) + 1);
        }
        return xpToLevelUp;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    @Override
    public String getGithubLogin() {
        return githubLogin;
    }

    @Override
    public void setGithubLogin(String githubLogin) {
        this.githubLogin = githubLogin;
    }

    @Override
    public String getGithubRepoName() {
        return githubRepoName;
    }

    @Override
    public void setGithubRepoName(String githubRepoName) {
        this.githubRepoName = githubRepoName;

    }

    @Override
    public Date getLastPush() {
        return lastPush;
    }

    @Override
    public void setLastPush(Date lastPush) {
        this.lastPush = lastPush;

    }

    @Override
    public String getUserJWTToken() {
        return jwt_token;
    }

    @Override
    public void setUserJWTToken() {
        this.jwt_token = jwt_token;
    }

    @Override
    public int getCurrentStreak() {
        return currentStreak;
    }

    @Override
    public void setCurrentStreak(int currentStreak) {
        this.currentStreak = currentStreak;
    }

    @Override
    public int getXp() {
        return xp;
    }

    @Override
    public void setXp(int xp) {
        this.xp = xp;

    }

    @Override
    public int getCurrentLevel() {
        return currentLevel;
    }

    @Override
    public void setCurrentLevel(int currentLevel) {
        this.currentLevel = currentLevel;

    }

    @Override
    public int getXpToNextLevel() {
        return xpToNextLevel;
    }

    @Override
    public void setXpToNextLevel(int xpToNextLevel) {
        this.xpToNextLevel = xpToNextLevel;

    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String toString() {
        return "User [userId=" + userId + ", " +
                "\nemail=" + email + ", " +
                "\ngithubLogin=" + githubLogin + ", " +
                "\ngithubRepoName=" + githubRepoName + ", " +
                "\nlastPush=" + lastPush + ", " +
                "\ncurrentStreak=" + currentStreak + ", " +
                "\ncurrentLevel=" + currentLevel + ", " +
                "\nxp=" + xp + ", " +
                "\nxpToNextLevel=" + xpToNextLevel + "]";
    }
}