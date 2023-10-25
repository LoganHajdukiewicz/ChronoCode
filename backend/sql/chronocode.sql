-- Drop the database if it exists
DROP DATABASE IF EXISTS chronocode;

-- Create the chronocode database
CREATE DATABASE chronocode;

-- Use the chronocode database
USE chronocode;

-- Create the user table
CREATE TABLE `user` (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(500) NOT NULL,
    github_login VARCHAR(255) NOT NULL,
    github_repo_name VARCHAR(255) NOT NULL,
    jwt_token VARCHAR(400),
	last_push DATE,
    current_streak INT DEFAULT 0,
    xp INT DEFAULT 0,
    current_level INT DEFAULT 1,
    xp_to_next_level INT
);

-- Create the item table
CREATE TABLE item (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    item VARCHAR(500) NOT NULL, 
    item_price INT DEFAULT 0,
    item_description VARCHAR(5000) NOT NULL
);

-- Create the 'achievements' table
CREATE TABLE achievement (
    achievement_id INT AUTO_INCREMENT PRIMARY KEY,
    achievement VARCHAR(500) NOT NULL,
    achievement_image VARCHAR(5000) NOT NULL,
    achievement_description VARCHAR(1000) NOT NULL
);

-- This should be the LAST table because it references and compiles all the data from other tables. 
CREATE TABLE user_data (
    user_id INT,
    achievement_id INT,
    item_id INT,
	FOREIGN KEY (user_id) REFERENCES `user`(user_id),
    FOREIGN KEY (achievement_id) REFERENCES achievement(achievement_id),
    FOREIGN KEY (item_id) REFERENCES item(item_id)
);

-- Insert achievement data
INSERT INTO achievement(achievement, achievement_image, achievement_description) VALUES (
	"Advanced Coder", "advanced_coder.png", "Advanced challenges, advanced skills. You're a data cowboy in the vast, electronic frontier."),
    ("AI Aficionado", "ai_aficionado.png", "Daisy, Daisy, give me your answer do...I'm half crazy all for the love of you. It won't be a stylish marriage, I can't afford a carriage, but you'll look sweet upon the seat of a bicycle built for two."),
    ("Algorithm Ace", "algorithm_ace.png", "You've mastered the algorithms, making coding magic."),
    ("Beta Tester Badge", "beta_tester.png", "You’re a pioneer, going boldly where no coder has gone before."),
    ("Big Base", "big_base.png", "Your Rebel Base is growing, filled with coding treasures."),
    ("Bug Hunter", "bug_hunter.png", "The Best Bug Hunter since Rico himself! Your dedication to hunting down app bugs knows no bounds."),
    ("Coding Guru", "coding_guru.png", "You've transcended the coding world, becoming a true master."),
    ("Cyberware Upgrade", "cyberware_upgrade.png", "You've visited a local Ripperdoc and upgraded your style."),
    ("Defeated MegaCorp", "defeated_megacorp.png", "You've triumphed over the digital overlords. Freedom reigns."),
    ("Guild Leader", "guild_leader.png", "You've rallied coders, forging a guild to conquer the digital realm."),
    ("Hello, World", "hello_world.png", "You've set up your profile. Say 'Hello, World', and see how deep the rabbit hole goes."),
    ("Holiday Hacker", "holiday_hacker.png", "You celebrate holidays by cracking festive code challenges."),
    ("100 Day Streak", "hundred_day_streak.png", "You've coded your way through a century of days!"),
    ("Joined A Crew", "joined_a_crew.png", "Welcome to the guild - together, we'll code for glory."),
    ("Mobile Mogul", "mobile_mogul.png", "The mobile world bows to your coding expertise."),
    ("Novice Coder", "novice_coder.png", "You've embarked on your coding journey."),
    ("One Day Streak", "one_day_streak.png", "A journey of a thousand code lines begins with a single keystroke."),
    ("One Month Streak", "one_month_streak.png", "A month of coding, a world of possibilities."),
    ("One Week Streak", "one_week_streak.png", "A week of code mastery in the making."),
    ("One Year Streak", "one_year_streak.png",  "A full year of coding dedication - you've reached the pinnacle."),
    ("Six Month Streak", "six_month_streak.png", "Half a year of relentless coding progress."),
    ("Three Month Streak", "three_month_streak.png", "Three months of coding excellence and counting."),
    ("Three Day Streak", "three_day_streak.png", "You've cracked the code of consistency."),
    ("Top Contributor", "top_contributor.png", "Your contributions light the way for others in the coding community."),
    ("Two Week Streak", "two_week_streak.png", "Two weeks of coding, twice the power."),
    ("Web Wizard", "web_wizard.png", "Web development is your domain, and you're the wizard who shapes it."
);

INSERT INTO item(item, item_price, item_description) VALUES (
	"Streak Freeze", 500, "This valuable item freezes your streak for one day, then vanishes."),
    ("PlaceHolder", 10, "This mythical item is made so Logan doesn't forget how to use SQL."),
    ("PlaceHolder2.0", 0, "I am going to get lunch and think of more items."
);