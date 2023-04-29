import ConditionService from "./conditionService.js";
import { conditionConstants } from '../conditionConstants.js';

const conditionService = new ConditionService();

export default class AlertService {
    #alertConditions = [];
    #previousAlertCode = 0;

    constructor() {
        this.setupAlertConditions();
    }

    sendAlert(code, sendDuplicateAlerts, onlyAlertonAlertCondtions) {
        if((onlyAlertonAlertCondtions && !this.isAlertCondition(code)) ||
             (!sendDuplicateAlerts && code == this.#previousAlertCode)) {
            return;
        }

        const condition = conditionService.getCondition(code);
        const subject = `Weather Alert: ${condition.day}`;
        const body = `Weather Alert: ${condition.day}`;

        console.log(`Sending alert: ${subject} - ${body}`);
    }

    isAlertCondition(code) {
        return this.#alertConditions.some(condition => condition.code === code);
    }

    setupAlertConditions() {
        const conditions = conditionService.getConditions();
        console.log(conditionConstants.Blizzard)
        console.log(conditions.find(condition => condition.code === conditionConstants.Blizzard));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.Blizzard));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.BlowingSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.Fog));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.FreezingDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.FreezingFog));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.HeavyFreezingDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.HeavyRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.HeavyRainAtTimes));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.HeavySnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.IcePellets));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightFreezingRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightRainShower));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightShowersOfIcePellets));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightSleet));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightSleetShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.LightSnowShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.Mist));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavyFreezingRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavyRainShower));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavyRainWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavyShowersOfIcePellets));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavySleet));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavySleetShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavySnowShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateOrHeavySnowWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateRainAtTimes));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ModerateSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyFreezingDrizzlePossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyHeavySnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyLightDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyLightRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyLightRainWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyLightSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyLightSnowWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyModerateSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchyRainPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchySleetPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.PatchySnowPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.ThunderyOutbreaksPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === conditionConstants.TorrentialRainShower));
    }
}