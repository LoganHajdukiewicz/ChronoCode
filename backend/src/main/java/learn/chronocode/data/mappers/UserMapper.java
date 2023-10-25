package learn.chronocode.data.mappers;

import learn.chronocode.models.User;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class UserMapper implements RowMapper<User> {

    @Override
    public User mapRow(ResultSet resultSet, int i) throws SQLException {
        User user = new User();
        user.setUserId(resultSet.getInt("user_id"));
        user.setEmail(resultSet.getString("email"));
        user.setPassword(resultSet.getString("password"));
        user.setGithubLogin(resultSet.getString("github_login"));
        user.setGithubRepoName(resultSet.getString("github_repo_name"));
        user.setLastPush(resultSet.getDate("last_push"));
        user.setCurrentStreak(resultSet.getInt("current_streak"));
        user.setXp(resultSet.getInt("xp"));
        user.setCurrentLevel(resultSet.getInt("current_level"));
        user.setXpToNextLevel(resultSet.getInt("xp_to_next_level"));

        return user;
    }


}