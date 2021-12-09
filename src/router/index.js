import { createRouter, createWebHistory } from "vue-router";
import BasicForm from "@/components/BasicForm";
import PlaceForm from "@/components/PlaceForm";
import RoomForm from "@/components/RoomForm";
import UtilityForm from "@/components/UtilityForm";
import RuleForm from "@/components/RuleForm";

const routes = [
    {
        path: "/form/1",
        name: "BasicForm",
        component: BasicForm,
    },
    {
        path: "/form/2",
        name: "PlaceForm",
        component: PlaceForm,
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
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
