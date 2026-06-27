import { container } from "tsyringe";
import IDBContext from "../../infrastructure/interfaces/IDbContext";
import DBContext from "../../infrastructure/database/DBContext";
import IService from "../../application/interfaces/IService";
import Service from "../../application/services/Service";
import IProvedorRepository from "../../core/interfaces/IProvedorRepository";
import ProvedorRepository from "../../infrastructure/repositories/provedor.repository";
import ReceitanetServices from "../../infrastructure/apis/receitanet/ReceitanetServices";


container.registerSingleton<IDBContext>("IDBContext", DBContext);
container.registerSingleton<IService>("IService", ReceitanetServices);
container.registerSingleton<IProvedorRepository>("IProvedorRepository", ProvedorRepository);
