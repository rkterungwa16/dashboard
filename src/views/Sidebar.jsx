import {
  SidebarItem,
  SidebarText,
  SidebarContainer,
  Payments,
  Orders,
  GenerateInvoiceButton
} from "../components/layout.components/Sidebar";

import {
  Icon
} from "../components/shared.components/Icon";

export const Sidebar = () => (
  <SidebarContainer>
    <GenerateInvoiceButton />
    <SidebarText
      content="Main"
      marginTop="10px"
      marginBottom="10px"
      marginLeft="25px"
    />
    <SidebarItem>
      <Icon
        url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598163235/Group_k58dqv.png"
        alt="Overview"
      />
      <SidebarText
        content="Overview"
        marginTop="10px"
        marginBottom="10px"
        marginLeft="20px"
      />
    </SidebarItem>
    <SidebarText
      content="Payments"
      marginTop="10px"
      marginBottom="10px"
      marginLeft="25px"
    />

    <Payments />

    <SidebarText
      content="Orders"
      marginTop="10px"
      marginBottom="10px"
      marginLeft="25px"
    />

    <Orders />

    <SidebarItem>
      <Icon
        url="https://res.cloudinary.com/doy0uyv63/image/upload/v1598163742/person_lbbyo2.png"
        alt="Overview"
      />
      <SidebarText
        content="Member Profile"
        marginTop="10px"
        marginBottom="10px"
        marginLeft="20px"
      />
    </SidebarItem>
  </SidebarContainer>
);
