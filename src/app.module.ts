import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvincesModule } from './provinces/provinces.module';
import { PrismaService } from './prisma.service';
import { DistrictsModule } from './districts/districts.module';
import { WardsModule } from './wards/wards.module';
import { SellersModule } from './sellers/sellers.module';
import { PropertiesModule } from './properties/properties.module';

@Module({
  imports: [ProvincesModule, DistrictsModule, WardsModule, SellersModule, PropertiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
