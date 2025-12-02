"use client";

import {
  CustomerFormValues,
  customerSchema,
} from "@/valiation/customer.schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { CustomerControllerService } from "@/packages/open-api/codegen";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/navigation";

type CustomerFormProps = {
  onSuccess: () => void;
  onError: () => void;
  defaultValues?: CustomerFormValues;
  customerId?: string;
};

const CustomerForm = ({
  onSuccess,
  onError,
  defaultValues,
  customerId,
}: CustomerFormProps) => {
const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerFormValues>({
    resolver: zodResolver(customerSchema),
    defaultValues,
    values: defaultValues,
  });

  const mutation = useMutation({
    mutationFn: (data: CustomerFormValues) => {
      return customerId
        ? CustomerControllerService.updateCustomer(customerId!, data)
        : CustomerControllerService.createCustomer(data);
    },
    onSuccess,
    onError,
  });

  const onSubmit = (data: CustomerFormValues) => {
    mutation.mutate(data);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, paddingBottom: "2rem" }}>
        <IconButton color="primary" onClick={() => router.push("/customers")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h2">
          {customerId ? "Update Customer" : "Add Customer"}
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{ display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            label="Name"
            {...register("name")}
            error={!!errors.name}
            helperText={errors.name?.message}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Surname"
            {...register("surName")}
            error={!!errors.surName}
            helperText={errors.surName?.message}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Info"
            {...register("info")}
            error={!!errors.info}
            helperText={errors.info?.message}
            sx={{ flex: 1 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            label="Tax ID"
            {...register("taxId")}
            error={!!errors.taxId}
            helperText={errors.taxId?.message}
            sx={{ flex: 1 }}
          />

          <FormControl sx={{ flex: 1 }}>
            <InputLabel>Country</InputLabel>
            <Select
              label="Country"
              defaultValue="DE"
              {...register("address.country")}
            >
              <MenuItem value="DE">Germany</MenuItem>
              <MenuItem value="AT">Austria</MenuItem>
              <MenuItem value="FR">France</MenuItem>
              <MenuItem value="GB">Great Britain</MenuItem>
              <MenuItem value="DK">Denmark</MenuItem>
              <MenuItem value="NL">Netherlands</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Street"
            {...register("address.street")}
            error={!!errors.address?.street}
            helperText={errors.address?.street?.message}
            sx={{ flex: 1 }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <TextField
            label="House Number"
            {...register("address.houseNumber")}
            error={!!errors.address?.houseNumber}
            helperText={errors.address?.houseNumber?.message}
            sx={{ flex: 1 }}
          />

          <TextField
            label="Postal Code"
            {...register("address.postalCode")}
            error={!!errors.address?.postalCode}
            helperText={errors.address?.postalCode?.message}
            sx={{ flex: 1 }}
          />
        </Box>

        <Button
          type="submit"
          variant="contained"
          color="secondary"
          sx={{ marginTop: "2rem", alignSelf: "flex-start" }}
        >
          {customerId ? "Update Customer" : "Add Customer"}
        </Button>
      </Box>
    </Box>
  );
};

export default CustomerForm;
