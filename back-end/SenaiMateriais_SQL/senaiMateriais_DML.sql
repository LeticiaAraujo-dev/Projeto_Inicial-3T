USE SenaiMateriais; 
GO


INSERT INTO Usuario (nome,email,senha)
VALUES             ('Vando silva','vando@gmail.com','van123')
                  ,
                  ('Helena souza','helena@gmail.com','hen123');
GO

INSERT INTO TipoEquipamento (nomeTipo)
VALUES                           
                             ('informatica')
							 ,('mobília')
							 ,('eletroeletronica'); 
							 GO
							            
INSERT INTO sala             (nome,andar,metragem)
VALUES                       
                              ('informatica','1','1004')
							  ,
							  ('laboratorio','1','1004')
							  ;
GO
INSERT INTO  Equipamento      ( idSala,idTipoEquipamento,statu,marca,numeroSerie,numeroPatrimonio,descricao) 
VALUES 
                              (1,'1','1','samsung','JKE000001',15,'notebook Samasung Duo core 4GB 500GB tela full HD 15.6 windows 10')
							 ,(1, '1','1','positivo','TMR000002',16,'notebook positivo Duo core 4GB 1TB windos 10');
