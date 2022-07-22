SELECT m.title , b.domestic_sales, b.international_sales
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id

SELECT m.title , (b.domestic_sales+ b.international_sales)
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id
WHERE b.domestic_sales < b.international_sales;

SELECT title, rating 
FROM pixar.movies AS m
INNER JOIN pixar.box_office AS b
ON m.id = b.movie_id
ORDER BY b.rating DESC; 

SELECT t.name,t.location,m.title,m.director,m.year, m.length_minutes
FROM
    pixar.theater AS t
LEFT JOIN
    pixar.movies m ON t.id = m.theater_id
ORDER BY t.name;

USE pixar;

SELECT
    t.id,
    t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM
    theater t
RIGHT JOIN
    movies m ON t.id = m.theater_id
ORDER BY t.name;