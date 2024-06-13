-- Award: Heaviest Hitter. Find the team with the heaviest weight avergae of their batters for a year.

WITH previous_query AS (
	SELECT ROUND(AVG(people.weight), 2) AS "average_weight", batting.teamid, batting.yearid
	FROM batting
	JOIN people
		ON batting.playerid = people.playerid
  GROUP BY batting.yearid, batting.teamid
)
SELECT teams.name, previous_query.average_weight, previous_query.yearid
FROM previous_query
JOIN teams
	ON teams.teamid = previous_query.teamid
ORDER BY previous_query.average_weight DESC
LIMIT 1

-- Award: Shortest Sluggers. Smallest average height of batters for a year.

WITH previous_query AS (
	SELECT ROUND(AVG(people.height), 2) AS "average_height", batting.teamid, batting.yearid
	FROM batting
	JOIN people
		ON batting.playerid = people.playerid
  GROUP BY batting.yearid, batting.teamid
)
SELECT teams.name, previous_query.average_height, previous_query.yearid
FROM previous_query
JOIN teams
	ON teams.teamid = previous_query.teamid
ORDER BY previous_query.average_height ASC
LIMIT 1

-- Biggest Spenders
SELECT SUM(salaries.salary) AS "total_salary", salaries.yearid, teams.name
FROM salaries
JOIN teams
	ON teams.teamid = salaries.teamid
GROUP BY teams.name, salaries.yearid
ORDER BY SUM(salaries.salary) DESC

-- Most bang for their buck 2010
SELECT ROUND(SUM(salaries.salary)/ teams.w) AS "cost_per_win", salaries.yearid, teams.name
FROM salaries
JOIN teams
	ON teams.teamid = salaries.teamid
  AND teams.yearid = salaries.yearid
WHERE salaries.yearid = 2010
GROUP BY teams.name, salaries.yearid, teams.w
ORDER BY SUM(salaries.salary)/ teams.w ASC

-- Priciest Starter
SELECT people.namegiven, salaries.salary / pitching.g AS "price_per_start"
FROM pitching
JOIN salaries
	ON pitching.playerid = salaries.playerid
  AND pitching.yearid = salaries.yearid
  AND pitching.teamid = salaries.teamid
JOIN people
	ON people.playerid = pitching.playerid
WHERE pitching.g > 10
ORDER BY ROUND(salaries.salary / pitching.g) DESC