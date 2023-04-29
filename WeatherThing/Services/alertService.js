import conditionService from "./conditionService.js";
import * as condtionConstants from '../condtionConstants.js';

export default class AlertService {
    #alertConditions = [];
    #previousAlertCode = 0;

    constuctor() {
        SetupAlertConditions();
    }

    sendAlert(code, sendDuplicateAlerts, onlyAlertonAlertCondtions) {
        if((onlyAlertonAlertCondtions && !isAlertCondition(code)) ||
             (!sendDuplicateAlerts && code == this.#previousAlertCode)) {
            return;
        }

        const condition = conditionService.getCondition(code);
        const subject = `Weather Alert: ${condition.day}`;
        const body = `Weather Alert: ${condition.day}`;

        console.log(`Sending alert: ${subject} - ${body}`);
    }

    isAlertCondition(code) {
        return this.#alertConditions.some(condition => condition.code == code);
    }

    SetupAlertConditions() {
        const conditions = conditionService.getConditions();
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.Blizzard));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.BlowingSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.Fog));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.FreezingDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.FreezingFog));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.HeavyFreezingDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.HeavyRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.HeavyRainAtTimes));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.HeavySnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.IcePellets));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightFreezingRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightRainShower));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightShowersOfIcePellets));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightSleet));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightSleetShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.LightSnowShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.Mist));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavyFreezingRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavyRainShower));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavyRainWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavyShowersOfIcePellets));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavySleet));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavySleetShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavySnowShowers));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateOrHeavySnowWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateRainAtTimes));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ModerateSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyFreezingDrizzlePossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyHeavySnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyLightDrizzle));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyLightRain));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyLightRainWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyLightSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyLightSnowWithThunder));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyModerateSnow));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchyRainPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchySleetPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.PatchySnowPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.ThunderyOutbreaksPossible));
        this.#alertConditions.push(conditions.find(condition => condition.code === condtionConstants.TorrentialRainShower));
    }
}