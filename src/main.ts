import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createConnection, Connection } from "typeorm";
import { ValidationPipe } from "@nestjs/common/pipes/validation.pipe";
import { join } from "path";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const connection: Connection = await createConnection({
    type: "postgres",
    host: "localhost",
    port: 5444,
    username: "unicorn_user",
    password: "magical_password",
    database: "rainbow_database",
    entities: [join(__dirname, "**", "*.entity.{ts,js}")],
    logging: ["error"],
  });
  await connection.synchronize();
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
