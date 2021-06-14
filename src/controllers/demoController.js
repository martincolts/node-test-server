export class DemoController {
    static post(req, res) {
        return res.status(200)
        .json(req.body);
    }
}