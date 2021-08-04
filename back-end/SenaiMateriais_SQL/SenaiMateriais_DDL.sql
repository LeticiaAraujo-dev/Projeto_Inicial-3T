CREATE DATABASE SenaiMateriais;
GO

USE SenaiMateriais;
GO

CREATE TABLE Usuario (
	idUsuario		INT PRIMARY KEY IDENTITY
	,email			VARCHAR(200) UNIQUE NOT NULL
	,senha			VARCHAR(200) NOT NULL
	,nome			VARCHAR(200) NOT NULL
);
GO

CREATE TABLE Sala (
	idSala				INT PRIMARY KEY IDENTITY
	,andar				INT NOT NULL
	,nome				VARCHAR(200) NOT NULL
	,metragem			INT NOT NULL
);
GO

CREATE TABLE TipoEquipamento (
	idTipoEquipamento				INT PRIMARY KEY IDENTITY
	,nomeTipo						VARCHAR(200) NOT NULL
);
GO

CREATE TABLE Equipamento (
	idEquipamento					INT PRIMARY KEY IDENTITY
	,idTipoEquipamento				INT FOREIGN KEY REFERENCES TipoEquipamento(idTipoEquipamento) NOT NULL
	,idSala							INT FOREIGN KEY REFERENCES Sala(idSala) NOT NULL
	,statu							BIT NOT NULL
	,marca							VARCHAR(200) NOT NULL
	,descricao						VARCHAR(200) NOT NULL
	,numeroPatrimonio				VARCHAR(200) NOT NULL
	,numeroSerie					VARCHAR(200) NOT NULL
);
GO