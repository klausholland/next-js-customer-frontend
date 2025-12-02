"use client";

import {
  CustomerControllerService,
  CustomerDto,
} from "@/packages/open-api/codegen";
import { Button, Card, IconButton, useMediaQuery, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { AddCircleOutline } from "@mui/icons-material";
import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CreateIcon from "@mui/icons-material/Create";

const Customers: NextPage = () => {
  const { data: customers, isLoading } = useQuery({
    queryKey: ["customers"],
    queryFn: async () => {
      return CustomerControllerService.getAllCustomers();
    },
  });

  const router = useRouter();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.down("md"));

  const columns = useMemo(() => {
    const columns: GridColDef<CustomerDto>[] = [
      {
        field: "name",
        headerName: "Name",
        flex: 1,
      },
      {
        field: "surName",
        headerName: "Surname",
        flex: 1,
      },
      {
        field: "taxId",
        headerName: "Tax ID",
        flex: 1,
      },
      {
        field: "country",
        headerName: "Country",
        flex: 1,
        valueGetter: (_, row) => row.address.country,
      },
      {
        field: "street",
        headerName: "Street",
        flex: 1,
        valueGetter: (_, row) => row.address.street,
      },
      {
        field: "houseNumber",
        headerName: "House Number",
        flex: 1,
        valueGetter: (_, row) => row.address.houseNumber,
      },
      {
        field: "postalCode",
        headerName: "Postal Code",
        flex: 1,
        valueGetter: (_, row) => row.address.postalCode,
      },
      {
        field: "edit",
        headerName: "Edit",
        flex: 1,
        filterable: false,
        sortable: false,
        renderCell: (params) => (
          <IconButton
            color="primary"
            onClick={() => router.push(`/customers/${params.row.id}/edit`)}
          >
            <CreateIcon />
          </IconButton>
        ),
      },
    ];
    return columns;
  }, [router]);

  return (
    <Card sx={{ padding: "2rem" }}>
      <Link href="/customers/new">
        <Button
          variant="outlined"
          color="secondary"
          startIcon={<AddCircleOutline />}
        >
          Add Customer
        </Button>
      </Link>
      <DataGrid
        sx={{ marginTop: "2rem" }}
        rows={customers}
        columns={columns}
        loading={isLoading}
        columnVisibilityModel={{
            postalCode: !isMedium,
            houseNumber: !isMedium,
            street: !isMedium,
            country: !isMedium,
            taxId: !isSmall
        }}
      />
    </Card>
  );
};

export default Customers;
