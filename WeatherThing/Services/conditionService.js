import * as fs from 'fs';

export default class ConditionService {
    constructor() {
        const jsonData = fs.readFileSync('./Data/weather_conditions.json', 'utf8');
        this.conditions = JSON.parse(jsonData);
    }

    getConditions()
    {
        return this.conditions;
    }

    getCondition(code) {
        return this.conditions.find(condition => condition.code == code);
    }
}