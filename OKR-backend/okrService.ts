import okrDB from './Local/db.json';
export class OkrService {
    getOkrData() {
        return {status: "OK", data: okrDB};
    }
}