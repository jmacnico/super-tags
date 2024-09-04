import { FactoryControllers } from "@repo/main";
import { ExpressAdapter } from "../utils/adapters/ExpressAdapter";

export function SuperTagRoutes(app: any) {
	app.post('/api/supertag', async (req: any, res: any) => {
		const adapter = new ExpressAdapter(FactoryControllers.makeCreateSuperTagController())
		return await adapter.Execute(req, res)
	});

	app.get('/api/supertag', async (req: any, res: any) => {
		const adapter = new ExpressAdapter(FactoryControllers.makeGetAllSuperTagsController())
		return await adapter.Execute(req, res)
	});
}
