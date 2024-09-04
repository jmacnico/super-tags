import { FactoryControllers } from "@repo/main";
import { ExpressAdapter } from "../utils/adapters/ExpressAdapter";

export function UserManagementRoutes(app: any) {
    app.post('/api/signin', async (req: any, res: any) => {
        const adapter = new ExpressAdapter(FactoryControllers.makeSignInController())
        return await adapter.Execute(req, res)
    });

    app.post('/api/users', async (req: any, res: any) => {
        const adapter = new ExpressAdapter(FactoryControllers.makeUserRegisterController())
        return await adapter.Execute(req, res)
    });
    app.get('/api/users', async (req: any, res: any) => {
        const adapter = new ExpressAdapter(FactoryControllers.makeGetAllUsersController())
        return await adapter.Execute(req, res)
    });
}





