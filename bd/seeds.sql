INSERT INTO department (name)
VALUES  ("Administration"),
        ("Front Office"),
        ("Science"),
        ("Math"),
        ("English"),
        ("History"),
        ("Electives");

INSERT INTO role (title, salary, department_id)
VALUES  ("Principal", 100000, 1),
        ("Vice Principal", 80000, 1),
        ("Secretary", 50000, 2),
        ("Science Teacher", 60000, 3),
        ("Math Department Chair", 65000, 4);

INSERT INTO employee (last_name, first_name, role_id)
VALUES  ("Walker", "Sandra", 1),
        ("Cole", "Nancy", 2),
        ("Crawford", "Brian", 4);
