import { Box, Tab, Tabs, Typography } from "@mui/material"
import { useState, CSSProperties, useEffect } from "react"
import PlayListLays from "../PlayListLays"
import { PLAYER_ITEM } from "../../../../../../items/PLAYER_ITEM"
import { useAppSelector } from "../../../../../../app/hooks"
import LyricLays from "../LyricLays"

interface IProps {}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

const tabStyle: CSSProperties = {
  flex: 1,
  color: "#ffffffB3",
  fontSize: "14px",
  fontWeight: 600,
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="h-full overflow-hidden pr-3 hover:card-main-view-player-hover"
    >
      <div className="">{children}</div>
    </div>
  )
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

const MainArea: React.FC<IProps> = () => {
  const [value, setValue] = useState(0)
  const [arrValue, setArrvalue] = useState<number[]>([0])
  const playListId = useAppSelector((state) => state.player.playListId)

  useEffect(() => {
    setArrvalue([value || 0])
  }, [playListId])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
    setArrvalue((preSate) => [...preSate, newValue])
  }
  return (
    <>
      <Box sx={{ borderBottom: 1, borderColor: "var(--border-main)" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {PLAYER_ITEM?.map((item, index) => {
            return (
              <Tab
                key={index}
                style={{
                  ...tabStyle,
                  color: value == index ? "white" : "#ffffffB3",
                }}
                label={item.name}
                {...a11yProps(index)}
              />
            )
          })}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {arrValue?.includes(0) && <PlayListLays />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {arrValue?.includes(1) && <LyricLays />}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        {arrValue?.includes(2) && <PlayListLays />}
      </CustomTabPanel>
    </>
  )
}

export default MainArea
