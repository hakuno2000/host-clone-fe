import { createRouter, createWebHistory } from "vue-router";
import BasicForm from "@/components/BasicForm";
import LocationForm from "@/components/LocationForm";
import RoomForm from "@/components/RoomForm";
import UtilityForm from "@/components/UtilityForm";
import RuleForm from "@/components/RuleForm";
import InformationForm from "@/components/InformationForm";
import PlaceList from "@/components/PlaceList";
import BookingList from "@/components/BookingList";

const routes = [
    {
        path: "/",
        name: "BookingList",
        component: BookingList,
    },
    {
        path: "/place",
        name: "PlaceList",
        component: PlaceList,
    },
    {
        path: "/form/1",
        name: "BasicForm",
        component: BasicForm,
    },
    {
        path: "/form/2",
        name: "LocationForm",
        component: LocationForm,
    },
    {
        path: "/form/3",
        name: "RoomForm",
        component: RoomForm,
    },
    {
        path: "/form/4",
        name: "UtilityForm",
        component: UtilityForm,
    },
    {
        path: "/form/5",
        name: "RuleForm",
        component: RuleForm,
    },
    {
        path: "/form/6",
        name: "InformationForm",
        component: InformationForm,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
