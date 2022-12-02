import { Config, StackContext } from "@serverless-stack/resources"
import { SSMSecureParameterService } from "./lib/ssm-secure-parameter-service"

export async function SecretStack({
  app,
  stack,
}: StackContext, tagList: Array<string>) {
  // TODO: 
  const authToken = new Config.Secret(stack, "AUTH_TOKEN");
  const ssmSecureParameterService = new SSMSecureParameterService(stack.region)
  await ssmSecureParameterService.putIfNotExists(
    '/test/pickup/secure/created',
    tagList,
  )
}
