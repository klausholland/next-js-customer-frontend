import type { CustomerDto } from "@/packages/open-api/codegen";
import type { CustomerFormValues } from "@/valiation/customer.schema";
import type { AddressFormValues } from "@/valiation/address.schema";


export function mapCustomerDtoToFormValues(dto: CustomerDto): CustomerFormValues {
  return {
    name: dto.name,
    surName: dto.surName,
    info: dto.info ?? "",
    taxId: dto.taxId,
    address: {
      country: dto.address.country as AddressFormValues["country"],
      street: dto.address.street,
      houseNumber: dto.address.houseNumber,
      postalCode: dto.address.postalCode,
    },
  };
}