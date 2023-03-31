DROP TABLE IF EXISTS commitment ;

CREATE TABLE commitment (
  ID INT PRIMARY KEY,
  TITLE VARCHAR(250) NOT NULL,
  START_DATE DATE NOT NULL,
  END_DATE DATE,
  ASSOCIATION_NAME VARCHAR(250) NOT NULL,
  ASSOCIATION_LINK VARCHAR(250),
  DESCRIPTION VARCHAR(250)
);

INSERT INTO commitment (ID, TITLE, START_DATE, END_DATE, ASSOCIATION_NAME, ASSOCIATION_LINK, DESCRIPTION) VALUES
  (1, 'Responsable Projet Sud', DATE '2016-09-01', DATE '2017-07-01','Ingénieurs Sans Frontières (ISF)', 'https://www.isf-france.org/', 'Suivi des projets Sud'),
  (2, 'Responsable Communication', DATE '2016-09-01', DATE '2017-07-01','GreenSAT', 'https://greensatagrobiopol.wixsite.com/greensat', 'Création et maintenance du site Wix'),
  (3, 'Responsable Communication', DATE '2016-09-01', DATE '2017-07-01','Impro''Cibo', 'https://www.facebook.com/improcibo.lapage/', 'Communication des événements du club'),
  (4, 'Pôle Animation', DATE '2017-09-01', DATE '2018-07-01','K''fet de nuit de l''ENSAT', 'https://www.bde.ensat.fr/clubs/kfetnuit/fiche/', 'Participation aux événements du club');
