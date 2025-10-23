CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    job_type VARCHAR(50),
    salary_text VARCHAR(100),
    salary_min INTEGER,
    salary_max INTEGER,
    description TEXT,
    requirements TEXT,
    responsibilities TEXT,
    application_deadline DATE,
    created_at TIMESTAMP DEFAULT now()
);

INSERT INTO jobs (title, company, location, job_type, salary_text, salary_min, salary_max, description, requirements, responsibilities, application_deadline)
VALUES
('Frontend Developer', 'VCODEZ', 'Chennai', 'Full-time', 'â‚¹25,000 - â‚¹40,000', 25000, 40000, 'Build React UI', 'React, HTML, CSS', 'Implement components', '2025-11-30'),
('Backend Developer', 'Cybermind Works', 'Remote', 'Contract', 'â‚¹40,000 - â‚¹60,000', 40000, 60000, 'API and DB', 'Java/Spring', 'Design APIs', '2025-12-15');
