import { getRepository } from "typeorm";
import { Work } from "../entity/Work";
import { Worker } from "../entity/Worker";
import { Status } from "../entity/Worker";
import { Controller } from "./base.controller";

export class WorkController extends Controller {
    repository = getRepository(Work);
    workerRepository = getRepository(Worker)

    create = async (req, res) => {
        const entity = this.repository.create(req.body as Work);
        if(entity.id) {
            entity.id = null;
        }

        if(entity.workers.length > 0) {
            for(let worker of entity.workers) {
                await this.workerRepository.update(worker.id, {
                    status: Status.WORKING
                })
            }
        }
        try {
            const entityAdded = await this.repository.save(entity);
            res.status(201).json(entityAdded);
        } catch (err) {
            return this.errorHandler(res, 500, err);
        }
    }

    getAll = async (req, res) => {
        try {
            const entities = await this.repository.find({relations: ["workers"]});
            res.json(entities);
        } catch (err) {
            return this.errorHandler(res, 500, err);
        }
    }
}